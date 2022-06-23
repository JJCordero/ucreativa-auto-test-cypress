describe('Intercept', () => {

    it.skip('Modificar response', function () {
        cy.visit('https://www.rahulshettyacademy.com/angularAppdemo')

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            {
                statusCode: 200,
                body: [
                    { "book_name": "Cypress with Andy", "isbn": "RSU", "aisle": "2301" }
                ]
            }).as('bookingResponse')

        cy.get('button.btn.btn-primary').click()

        cy.wait('@bookingResponse').should(({ request, response }) => {
            cy.get('tbody tr').should('have.length', response.body.length)
        })

        //cy.get('p').should('have.text', 'Oops only 1 Book available')
    })

    it.skip('Intercept request - Security', function () {
        cy.visit('https://www.rahulshettyacademy.com/angularAppdemo')

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
            req.continue((resp) => {
                //expect(resp.body.length).to.be.equal(0)
                expect(resp.statusCode).to.be.eq(403)
            })
        }).as('dummyRequest')

        cy.get('button.btn.btn-primary').click()

        cy.wait('@dummyRequest')
    })

    it.skip('Intercept request - 404', function () {
        cy.visit('https://www.rahulshettyacademy.com/angularAppdemo')

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotraXXXXXXX'
            req.continue((resp) => {
                //expect(resp.body.length).to.be.equal(0)
                expect(resp.statusCode).to.be.eq(404)
            })
        }).as('dummyRequest')

        cy.get('button.btn.btn-primary').click()

        cy.wait('@dummyRequest')
    })

    it('CY Request - API', function () {
        cy.request('GET',
            'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty').then(response => {
                console.log(response)
                expect(response.isOkStatusCode).to.be.true
                expect(response.status).to.equal(200)
                expect(response.statusText).to.eq('OK')
                expect(response.body.length).to.be.gt(500)
                expect(response.body[0].aisle).equal("2301")
                expect(response).to.have.property('headers')
                expect(response.duration).to.be.lt(2000)
            })
    })
})
