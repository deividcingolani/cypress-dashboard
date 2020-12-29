describe('Scroll on the page', function () {
	it('should scroll down and up on the page', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/')
		cy.get('#submit-button').scrollIntoView()
		cy.wait(5000)
		cy.get('header').scrollIntoView()
	})
})
