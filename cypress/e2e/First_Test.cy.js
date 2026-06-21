/// <reference types="cypress" />
import { LoginPage } from "./pages/Login_Page";

const loginPage = new LoginPage();

describe("SauceDemo - All Login Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("Valid Login & Adding item to cart", () => {
    loginPage.enterCredentials("standard_user", "secret_sauce");
    loginPage.clickLoginButton();

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").should("have.length.greaterThan", 0);

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.wait(3000);

    cy.get('[data-test="shopping-cart-link"]').click();
  });

  it("Invalid Login", () => {
    loginPage.enterCredentials("locked_out_user", "secret_sauce");
    loginPage.clickLoginButton();

    cy.get('[data-test="error"]').should(
      "contain",
      "Sorry, this user has been locked out.",
    );
  });
});
