describe('Tareas', () => {

    it('TODO LIST', () => {
        cy.visit('https://eviltester.github.io/simpletodolist/todolists.html')
        cy.get('.new-todo-list').type('zzdcsdc{enter}')
        cy.get('.new-todo-list').type('gggb{enter}')
        cy.get('.new-todo-list').type('aaabrbrbrbr{enter}')
        cy.get('ul.todo-list-list li').contains('gggb').should('be.visible')
    })

})