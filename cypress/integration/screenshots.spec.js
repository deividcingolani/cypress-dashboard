describe('Screenshots', function () {
	it('full page screenshot', () => {
		cy.viewport(1980, 1080)
		cy.visit('https://devexpress.github.io/testcafe/example/')
		cy.screenshot({ capture: 'fullPage' })
	})
	it('single element screenshot', () => {
		cy.get('header').screenshot()
		cy.get('#populate').screenshot()
	})
})
