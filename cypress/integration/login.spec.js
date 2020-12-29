describe('Working with inputs', function () {
    it("Should load login page", ()=>{
        cy.visit("http://zero.webappsecurity.com/login.html")
    })
    it('should fill username', function () {
       cy.get("#user_login").clear()
        cy.get("#user_login").type("Some Invalid Name", {delay:0})
    });
    it('should fill password', function () {
        cy.get("#user_password").clear()
        cy.get("#user_password").type("Some Invalid password", {delay:0})
    });
    it('should mark checkbox', function () {
        cy.get('input[type="checkbox"]').click()
        // cy.wait(5000)
    });
    it('should Submiting Form', function () {
        cy.contains("Sign in").click()

    });
    it('should display error Message', function () {
        cy.get(".alert-error").should("be.visible")
    });
});