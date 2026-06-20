/// <reference types="cypress" />
describe("SauceDemo Login", () => {
  it("Logs in successfully", () => {
    cy.visit("https://www.saucedemo.com");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.wait(3000);
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").should("have.length.greaterThan", 0);

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.wait(3000);

    cy.get('[data-test="shopping-cart-link"]').click();
  });
});
