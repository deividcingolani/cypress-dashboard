describe('Working with inputs', function () {
	it('should override the current line', function () {
		const date = new Date(2020, 3, 10).getTime()
		cy.clock(date)
		cy.log(date)
	})
	it('Should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.clearCookies({ log: true })
		cy.clearLocalStorage('your item', { log: true })
		cy.title().should('include', 'Zero - Log in')
	})
	it('should fill username', function () {
		cy.get('#user_login').as('username')
		cy.get('@username').clear()
		cy.get('@username').type('Some Invalid Name', { delay: 0 })
	})
	it('should fill password', function () {
		cy.get('#user_password').as('password')
		cy.get('@password').clear()
		cy.get('@password').type('Some Invalid password', { delay: 0 })
	})
	it('should mark checkbox', function () {
		cy.get('input[type="checkbox"]').click()
		// cy.wait(5000)
	})
	it('should Submiting Form', function () {
		cy.contains('Sign in').click()
	})
	it('should display error Message', function () {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
	})
})
