describe('Checkbox, dropdown y alerts', () => {
    it('Checkbox', () => {        
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
    })

    it('Dropdown Estatico', () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2')
    });

    it('Dropdown Dinamico', () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('Cos')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === "Costa Rica"){
                //$el.click()
                $el.trigger('click')
            }
        })

        cy.get('#autocomplete').should('have.value', 'Costa Rica')
    });
})
