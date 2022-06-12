const header = require("../../pages/commons/header")
const loginPage = require("../../pages/pages/login-page")

describe('POM', () => {
    it('Login', () => { 
        cy.visit('https://eviltester.github.io/simpletodolist/todolists.html')             
        cy.login('Admin', 'AdminPass')
        loginPage.elements.title().invoke('text').then((text) => {
            expect(text).to.equal('Admin View')
        })
        cy.logout()
    })

})