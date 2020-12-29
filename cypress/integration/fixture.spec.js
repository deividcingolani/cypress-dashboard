describe('Login with Fixture Data', function () {
	it('Should try to login', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password
			cy.get('#user_login').type(username, { delay: 0 })
			cy.get('#user_password').type(password, { delay: 0 })
			cy.contains('Sign in').click()
		})
	})
})
