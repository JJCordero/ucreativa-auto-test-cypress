const loginPage = require("../../pages/pages/login-page")
const testdata = require('../../fixtures/contactUsData.json')

describe('Fixtures Loop', () => {

    testdata.forEach(test => {
        it(`Login Fixture - ${test.TCname}`, function () {
            cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(test.name)
            cy.get('[name="last_name"]').type(test.lastName)
            cy.get('[name="email"]').type(test.email)
            cy.get('[name="message"]').type(test.message)
            cy.get('[type="submit"]').click()
        })
    })
})
