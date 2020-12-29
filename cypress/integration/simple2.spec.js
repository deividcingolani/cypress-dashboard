describe('My first simple test with cypress', function () {
    it('should load books website', function () {
        cy.visit('http://books.toscrape.com/', { timeout: 10000 })
        cy.url().should('include', 'toscrape.com/')
        cy.log('Before ReLoad!')
        cy.reload()
        cy.log('After ReLoad!')
    })
    it('should click on Travel Category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })
    it('should display correct number of books', function () {
        cy.get('.product_pod').its('length').should('eq', 11)
    })
    it('should click on poetry category', function () {
        cy.get('a').contains('Poetry').click()
    })
    it('should display on olio book detail', function () {
        cy.get('a').contains('Olio').click()
    })

    it('should have correct  price tag', function () {
        cy.get('.price_color').contains('£23.88')
    })
})
