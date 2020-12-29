describe('My first simple test with cypress', function () {
    it('True should be True', () => {
        expect(true).to.equal(true)
    })
    it('5 should be 5 ', function () {
        expect(5).to.equal(5)
    })
})

describe('Another Describe block', function () {
    it('False should be false', () => {
        expect(false).to.equal(false)
    })
})

describe('Browser Actions', function () {
    it('should load correct url', () => {
        cy.visit('https://www.google.com/', { timeout: 10000 })
    })
    it('should check correct url', function () {
        cy.url().should('include', 'https://www.google.com/')
    })
    it('should wait for 3 seconds', () => {
        cy.wait(3000)
    })
    it('should pause the execution', () => {
        cy.pause()
    })
    it('should check for correct  element on the page', function () {
        cy.get('body').should('be.visible')
    })
})
