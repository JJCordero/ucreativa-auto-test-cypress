class LoginPage{
    elements = {
        usernameField: () => cy.get('input[name="username"]'),
        passwordField: () => cy.get('input[name="password"]'),
        loginBtn: () => cy.get('#login'),
        title: () => cy.get('h1')
    }

    enterUsername(username){
        this.elements.usernameField().type(username)   
    }

    enterPassword(password){
        this.elements.passwordField().type(password)   
    }

    clickBtn(){
        this.elements.loginBtn().click()  
    }
}

module.exports = new LoginPage()