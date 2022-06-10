class Header{
    elements = {
        adminLoginLink: () => cy.get('#navadminlogin'),
        logoutLink: () => cy.get('#navadminlogout')
    }

    clickLogin(){
        this.elements.adminLoginLink().click()
    }

    clickLogout(){
        this.elements.logoutLink().click()
    }
}

module.exports = new Header()