
describe('Write File', () => {
    it.skip('Write json File 1', () => {
        let userJson = { name: 'Andy', email: 'andy@gmail.com' }
        cy.writeFile('cypress/fixtures/files/userDataCreated.json', userJson)

        cy.readFile('cypress/fixtures/files/userDataCreated.json').then((user) => {
            console.log(user)
            expect(user).to.be.an('object')
            expect(user.email).to.be.equal('andy@gmail.com')
        })
    })


    it.skip('Write API response', () => {
        cy.request('GET', 'https://ubicaciones.paginasweb.cr/provincias.json').then((resp) => {
            console.log(resp)
            cy.writeFile('cypress/fixtures/files/mis_provincias.json', resp.body)
        })

        cy.fixture('files/mis_provincias.json').then((provincias) => {
            expect(provincias['6']).to.exist
            expect(provincias['6']).to.be.equal('Puntarenas')
        })
    })

    it('Full test', () => {
        cy.request('https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty').then((books) => {
            //cy.writeFile('cypress/fixtures/files/books.json', books.body)

            cy.visit('https://example.cypress.io/todo')
            books.body.forEach((element, index, list) => {
                if (index <= 5) {
                    cy.get('.new-todo').type(`${element.book_name}{enter}`)
                }
            });
        })

        let listaLibros = []
        cy.get('.todo-list li').each((element, index) => {
            listaLibros.push({ id: index, name: element.text() })
        })

        cy.writeFile('cypress/fixtures/files/todos.json', listaLibros)
    })

})