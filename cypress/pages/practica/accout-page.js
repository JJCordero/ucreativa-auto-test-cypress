class AccountPage {
    elements = {
        registerUser: () => cy.get('#reg_username'),
        registerEmail: () => cy.get('#reg_email'),
        registerPass: () => cy.get('#reg_password'),
        registerBtn: () => cy.get('button[value="Register"]'),
        loginUser: () => cy.get('#username'),
        loginPass: () => cy.get('#password'),
        loginBtn: () => cy.get('button[name="login"]'),

        errorMessage:() => cy.get('.woocommerce-error li')
    }

    typeUserRegister(username){
        this.elements.registerUser().type(username)
    }

    typeEmailRegister(email){
        this.elements.registerEmail().type(email)
    }

    typePassRegister(password){
        this.elements.registerPass().type(password)
    }

    clickRegisterBtn(){
        this.elements.registerBtn().click()
    }
}

module.exports = new AccountPage()