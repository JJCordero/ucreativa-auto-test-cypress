describe('Checkbox, dropdown y alerts', () => {
    it('Checkbox', () => {        
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1', 'option3'])
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

    it('Alert', () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
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

    it('Sweet Alert', () => {
        cy.visit('https://sweetalert2.github.io/')
        cy.get('.showcase.sweet .show-example-btn').click()
        cy.get('#swal2-title').parent().should('be.visible')
        cy.get('#swal2-html-container').should('have.text', 'You clicked the button!')
        cy.get('[aria-labelledby="swal2-title"] .swal2-success-ring').should('have.css', 'color', 'rgb(165, 220, 134)')
        
    });

})
