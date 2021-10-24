/// <reference types="cypress" />

describe("renders the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("renders correctly", () => {
      cy.get("#container").should("exist");
    });

    it("intro component test", () => {
      cy.get("#intro").should("exist");
    });

    it("topbar component test", () => {
      cy.get("#topbar").should("exist");
    });

    it("topbar component test", () => {
      cy.get("#menu").should("exist");
    });

    it("skills component test", () => {
      cy.get("#skills").should("exist");
    });
});
