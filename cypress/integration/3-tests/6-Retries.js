describe('Alias Element', () => {
    it('then promise', () => {
        let value = "Calathea Lodge Monteverde Monteverde, Costa Rica"
        cy.visit('https://www.booking.com/')
        cy.get('#ss').type(value)
        cy.get('[aria-controls="xp__guests__inputs-container"]').parent().click()
        cy.get('#xp__guests__inputs-container').should('be.visible')
        cy.get('.sb-group__field-adults button').eq(1).click()
        cy.get('.xp__button [data-sb-id="main"]').click()
        cy.get('[data-testid="property-card"]').as('propertyCard')
        cy.get('@propertyCard').eq(0).find('[data-testid="title"]').invoke('text').then((myText) => {
            if(myText.includes('Cabañas Don Camilo Albergue de Montaña')){
                console.log('TRUE')
            }else{
                console.log('FALSE')
            }
            //convert dates js

        })
        cy.get('@propertyCard').eq(0).find('[data-testid="review-score"]').find('div').eq(0).should('gt', 8)
        console.log('Hola1')
    })
})
