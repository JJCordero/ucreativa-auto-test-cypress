const header = require("../pages/commons/header")
const loginPage = require("../pages/pages/login-page")

Cypress.Commands.add('login', (user, pass) => {
   header.elements.adminLoginLink().click()
   loginPage.enterUsername(user)
   loginPage.enterPassword(pass)
   loginPage.clickBtn()
})

Cypress.Commands.add('logout', () => {
   header.clickLogout()
})