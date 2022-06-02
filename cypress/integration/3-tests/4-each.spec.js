describe('Each Suite', () => {
    it('Each Test', () => {
        const menuList = [
            "Stays",
            "Flights",
            "Flight + Hotel",
            "Car rentals",
            "Attractions",
            "Airport taxis"
        ]


        cy.visit('https://www.booking.com/')
        cy.get('.bui-header__tab li a').find('span.bui-tab__text').each((myMenu, index, list) => {
            console.log(myMenu.text())
            console.log(index)
            console.log(list)
            
            //cy.wrap(myMenu).should('have.text', menuList[index])
            cy.wrap(myMenu).invoke('text').then((textoMenu) => {
                expect(textoMenu.replaceAll('\n', '')).to.contain(menuList[index])
            })

            if(myMenu.text().includes('Attractions')){
                cy.wrap(list).eq(4).click()
            }
        })       
        
    })
})