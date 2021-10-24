/// <reference types="cypress" />

describe("renders the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("renders correctly", () => {
      cy.get("#container").should("exist");
      cy.get("#intro").should("exist");
    });
});
