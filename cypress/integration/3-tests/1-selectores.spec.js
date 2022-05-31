describe('Selectores', () => {
    it('Test de Selectores', () => {
        cy.visit('https://www.booking.com/')        
        cy.get('.promote_article').find('div.promote_article_img')
        cy.get('.footer-navigation-links-column').eq(4).find('li.footer-navigation-link')
        cy.get('.footer-navigation-links-column').eq(4).find('li.footer-navigation-link').contains('Careers')
        cy.get('.bui-header .bui-tab__item')
        cy.get('.bui-header .bui-tab__item').eq(3).click()
    })
})