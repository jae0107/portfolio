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

    it("intro component test", () => {
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
      cy.get("#intro").click();
      cy.get(".hamburger").click();
      cy.get("#skills").click();
      cy.get(".hamburger").click();
      cy.get("#portfolio").click();
      cy.get(".hamburger").click();
      cy.get("#projects").click();
      cy.get(".hamburger").click();
      cy.get("#contact").click();
    });

    it("skills component test", () => {
      cy.get("#skills").should("exist");
    });

    it("portfolio component test", () => {
      cy.get("#portfolio").should("exist");
    });

    it.only("projects component test", () => {
      cy.get("#projects").should("exist");
      cy.get("#arrow_right").click();
    });

    it("contact component test", () => {
      cy.get("#contact").should("exist");
    });
});
