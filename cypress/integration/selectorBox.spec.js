describe('Select Box', function () {
    it('should should pick an option from select box', function () {
        cy.visit("https://devexpress.github.io/testcafe/example/")
        cy.get("#preferred-interface").select("JavaScript API")
        cy.get("#preferred-interface").should("have.value","JavaScript API" )

    });
});