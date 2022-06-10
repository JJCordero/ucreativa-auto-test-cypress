describe('Assert', () => {
    it('Should', () => {        
        cy.visit('https://eviltester.github.io/simpletodolist/todolists.html')
        cy.get('.new-todo-list').type('Este es un ejemplo{selectAll}Este es otro ejemplo{enter}')
        cy.get('.new-todo-list').type('Este es el tercer ejemplo{selectAll}{del}')
    })
})
