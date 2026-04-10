describe("Tests fonctionnels", () => {
    it("Affiche le bon titre", () => {
        cy.visit("/")
        cy.get("#title").contains("Two Ships")
    })
    it("Verifie la balise body", () => {
        cy.visit("/")
        cy.get("body").should("exist")
    })
    it("Verifie la balise title", () => {
        cy.visit("/")
        cy.title().should("eq", "Two Ships")
    })
})