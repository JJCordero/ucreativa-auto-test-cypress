/// <reference types="Cypress" />


describe('Hooks', () => {

  
    before('', () => {
        cy.log('**BEFORE**')
    })

    beforeEach('', () => {
        cy.log('**BEFORE EACH**')
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    })

    afterEach('', () => {
        cy.log('**AFTEREACH**')
    })

    after('', () => {
        cy.log('**AFTER**')
    })

    it('Checkbox', () => { 
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1', 'option3'])
    })

    it('Dropdown Estatico', () => {
        cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2')
    });

    it('Dropdown Dinamico', () => {
        cy.get('#autocomplete').type('Cos')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === "Costa Rica"){
                //$el.click()
                $el.trigger('click')
            }
        })
        cy.get('#autocomplete').should('have.value', 'Costa Rica')
    });

    it('Alert', () => {
        let name = 'Andy'
        cy.get('#name').type(name)

        cy.get('#alertbtn').click()
        cy.on('window:alert', (text) => {
                expect(text).to.equal(`Hello ${name}, share this practice page and share your knowledge`)
        })
               
        cy.get('#name').type(name)
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (text) => {
            expect(text).to.equal(`Hello ${name}, Are you sure you want to confirm?`)
        })

    });

})
