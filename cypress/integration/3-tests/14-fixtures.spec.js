const loginPage = require("../../pages/pages/login-page")
import testdata from '../../fixtures/testData.json'

describe('Fixtures', () => {

    before(() => {
        //https://docs.cypress.io/api/commands/fixture#Loaded-just-once
        cy.fixture('testData.json').then(function (data) {
            this.data = data
        })

        cy.fixture('testData.json').as('myData')        
    })


    it('Login Fixture Then', function () {
        cy.visit('https://eviltester.github.io/simpletodolist/todolists.html')
        cy.log(this.data)
        cy.login(this.data.username, this.data.password)
        loginPage.elements.title().invoke('text').then((text) => {
            expect(text).to.equal('Admin View')
        })
        cy.logout()
    })


    it('Login Fixture import', () => {
        cy.visit('https://eviltester.github.io/simpletodolist/todolists.html')
        cy.login(testdata.username, testdata.password)
        loginPage.elements.title().invoke('text').then((text) => {
            expect(text).to.equal('Admin View')
        })
        cy.logout()
    })


    // it('Login Fixture Alias', function () {
    //     cy.visit('https://eviltester.github.io/simpletodolist/todolists.html')
    //     cy.log(this.myData)
    //     cy.login(this.myData.username, this.myData.password)
    //     loginPage.elements.title().invoke('text').then((text) => {
    //         expect(text).to.equal('Admin View')
    //     })
    //     cy.logout()
    // })

 

   

})