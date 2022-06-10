describe('Assert', () => {
    it('Should', () => {        
        cy.visit('https://eviltester.github.io/simpletodolist/todolists.html')
        cy.get('h1').should('have.text', 'todos List Management')
    })

    it('Expect', () => {        
        cy.visit('https://eviltester.github.io/simpletodolist/todolists.html')
        cy.get('h1').then((titulo) => {
            expect(titulo).to.have.text('todos List Management')    
        })
    })

    it('Assert', () => {        
        cy.visit('https://eviltester.github.io/simpletodolist/todolists.html')
        cy.get('h1').invoke('text').then((titulo) => {
            assert.equal(titulo, "todos List Management", "TODO OK")   
        })
    })
})
