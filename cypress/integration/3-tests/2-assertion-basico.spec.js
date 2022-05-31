describe('Selectores', () => { 
    it('Click-Type', () => {
        let value = "Calathea Lodge Monteverde Monteverde, Costa Rica"
        cy.visit('https://www.booking.com/')
        cy.get('#ss').type(value)  
        cy.get('[aria-controls="xp__guests__inputs-container"]').parent().click()
        cy.get('#xp__guests__inputs-container').should('be.visible')
        cy.get('.sb-group__field-adults button').eq(1).click()
        cy.get('.xp__button [data-sb-id="main"]').click()  
        cy.get('[data-testid="property-card"]').eq(0).find('[data-testid="title"]').should('have.text', 'Calathea Lodge Monteverde')  
        cy.get('[data-testid="property-card"]').eq(0).find('[data-testid="review-score"]').find('div').eq(0).should('gt', 8)   
    })

    it('Length Test',() => {
        cy.visit('https://www.booking.com/')
        cy.get('.footer-navigation-links-column').eq(4).find('li.footer-navigation-link').should('have.length', 14)
        cy.get('.footer-navigation-links-column').eq(4).find('li.footer-navigation-link').its('length').should('be.gt', 10)
        cy.get('.footer-navigation-links-column').eq(4).find('li.footer-navigation-link').its('length').should('be.lt', 15)
    }) 
})