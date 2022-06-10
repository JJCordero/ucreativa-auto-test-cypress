class List{
    elements={
        title: () => cy.get('h1'),
        inputText: () => cy.get('.new-todo-list'),
        list: () => cy.get('.todo-list-list li'),
    }
}

module.exports = new List()