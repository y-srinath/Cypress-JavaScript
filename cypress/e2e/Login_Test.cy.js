/// <reference types="cypress" />
describe("SauceDemo Login", () => {
  it("Logs in successfully", () => {
    cy.visit("https://www.saucedemo.com");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");

    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");

    cy.get(".inventory_item").should("have.length.greaterThan", 0);
  });
});
