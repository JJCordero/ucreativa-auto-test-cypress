describe('Mi primer Suite', () =>  {
    it('Mi primer test', () => {
        cy.visit('https://www.booking.com/')
        cy.get('#ss').type('Montezuma')
        cy.get('.js-sb-submit-text').click()
    })

    it('Mi segundo test', () => {
        cy.visit('https://booking.kayak.com/')
    })
})