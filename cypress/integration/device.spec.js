describe('Device Tests', function () {
	it('720p', function () {
		cy.viewport(1280, 720)
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.wait(3000)
	})
	it('1080', function () {
		cy.viewport(1980, 1080)
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.wait(3000)
	})
	it('iPhone X', function () {
		cy.viewport('iphone-x')
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.wait(3000)
	})
	it('iPad Mini', function () {
		cy.viewport('ipad-mini')
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.wait(3000)
	})
	it('Macbook 15', function () {
		cy.viewport('macbook-15')
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.wait(3000)
	})
})
