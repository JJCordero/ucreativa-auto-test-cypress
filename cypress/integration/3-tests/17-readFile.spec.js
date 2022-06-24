describe('read File', () => {
    it.skip('Validade Package.json file', () => {
        cy.readFile('package.json').then((file) => {
            console.log(file)
            expect(file).to.be.an('object')
            expect(file.devDependencies.cypress).to.be.equal('^9.7.0')
        })
    })

    it.skip('read txt file ', () => {
        //path desde la raíz del proyecto
        cy.readFile('cypress/fixtures/helloworld.txt').should('eq', 'Hola, soy un texto plano')
    })

    it.skip('Read json file', () => {
        cy.readFile('cypress/fixtures/userData.json').its('password').should('eq', 'ucreativaPass')
    })

    it.skip('read MP3', () => {
        cy.readFile('cypress/downloads/Pluckandplay - Kwon.mp3', 'base64').then((mp3) => {
            const uri = 'data:audio/mp3;base64,' + mp3
            const audio = new Audio(uri)

            audio.play()

        })
    })

    it.skip('Archivo no existe', () => {
        cy.readFile('cypress/invalidFile.txt').should('not.exist')
    })
})