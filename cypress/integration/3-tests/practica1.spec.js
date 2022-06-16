const accoutPage = require("../../pages/practica/accout-page")
const footerPage = require("../../pages/practica/footer-page")
const headerPage = require("../../pages/practica/header-page")
import loginTest from '../../fixtures/loginTest.json'
import userData from '../../fixtures/userData.json'

describe('practica completa', () => {

    before(() => {
        cy.fixture('footerOptions.json').then(function (myoptions) {
            this.data = myoptions
        })
        
    })

    beforeEach(() => {
        cy.visit('https://shop.demoqa.com/shop/')
    })

    it('Validar Footer', function () {
        footerPage.elements.footerOptions().each(($el, index, $list) => {
            expect($el.text()).to.contain(this.data[index])
        })
    })

    it('Registro', function () {
        headerPage.clickOnMyAccount()
        accoutPage.typeUserRegister(userData.username)
        accoutPage.typeEmailRegister(userData.email)
        accoutPage.typePassRegister(userData.password)
        accoutPage.clickRegisterBtn()
    });

    loginTest.forEach(element => {
        it(`Logins test - ${element.tc}`, () => {
            headerPage.clickOnMyAccount()
            accoutPage.elements.loginUser().type(element.username)
            accoutPage.elements.loginPass().type(element.password)
            accoutPage.elements.loginBtn().click()

            accoutPage.elements.errorMessage().should('contain.text', element.errorMessage)
        });
    });
    
    

})