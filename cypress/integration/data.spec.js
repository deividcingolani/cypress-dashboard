describe('Write/Read data to JSON/ Text File', function () {
	it('should write data into JSON', () => {
		cy.writeFile('log.json', { name: 'Mike', age: 25 })
	})

	it('should write data to the text file', function () {
		cy.writeFile('log.txt', 'Hello World')
	})
	it('should read and verify data from JSON file', function () {
		cy.readFile('log.json').its('age').should('eq', 25)
	})
	it('should read and verify data from text file', function () {
		cy.readFile('log.txt').should('eq', 'Hello World')
	})

	it('should read and verify browser document text from text file', function () {
		cy.visit('https://docs.cypress.io')
		cy.wait(2000)
		cy.document().its('contentType').should('eq', 'text/html')
		cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
	})
})
