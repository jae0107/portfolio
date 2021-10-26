/// <reference types="cypress" />

describe("renders the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("renders correctly", () => {
      cy.viewport('macbook-16');

      cy.get("#container").should("exist");
      cy.get("#intro").should("exist");
      cy.get("#topbar").should("exist");
      cy.get("#menu").should("exist");
      cy.get("#skills").should("exist");
      cy.get("#portfolio").should("exist");
      cy.get("#projects").should("exist");
      cy.get("#contact").should("exist");
    });

    it("mobile testing", () => {
      cy.viewport('iphone-8');

      cy.get("#container").should("exist");
      cy.get("#intro").should("exist");
      cy.get("#topbar").should("exist");
      cy.get("#menu").should("exist");
      cy.get("#skills").should("exist");
      cy.get("#portfolio").should("exist");
      cy.get("#projects").should("exist");
      cy.get("#contact").should("exist");
    });

    it.only("intro component test", () => {
      cy.viewport('macbook-16');
      cy.get("#intro").should("exist");
      cy.get("#down").click();
    });

    it("topbar component test", () => {
      cy.get("#topbar").should("exist");
      cy.get(".logo").click();
      cy.get("#linkedin").click();
      cy.get("#github").click();
      cy.get("#resume").click();
    });

    it("menu component test", () => {
      cy.get("#menu").should("exist");
      cy.get(".hamburger").click();
    });

    it("skills component test", () => {
      cy.get("#skills").should("exist");
    });

    it("portfolio component test", () => {
      cy.get("#portfolio").should("exist");
    });

    it("projects component test", () => {
      cy.get("#projects").should("exist");
    });

    it("contact component test", () => {
      cy.get("#contact").should("exist");
    });
});
