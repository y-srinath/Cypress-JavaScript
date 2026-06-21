/* it("Assertions Test", () => {
  cy.visit("https://example.cypress.io");
  cy.contains("Commands").click();
  cy.contains("Assertions").click();
  cy.url().should("include", "/commands/assertions");
  cy.get("h1").should("have.text", "Assertions");
  cy.get("h3").contains("Implicit Assertions").should("be.visible");
  cy.get("h3").contains("Explicit Assertions").should("be.visible");
}); */

describe("Page checks", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/assertions");
  });

  it("checks url includes /commands/assertions", () => {
    cy.url().should("include", "/commands/assertions");
  });

  it("checks h1 heading", () => {
    cy.get("h1").should("have.text", "Assertions");
  });

  it("checks implicit heading", () => {
    cy.contains("Implicit Assertions").should("be.visible");
  });

  it("checks explicit assertions heading is visible", () => {
    cy.contains("Explicit Assertions").should("be.visible");
  });

  it("checks table has passing rows", () => {
    cy.get(".assertion-table tbody tr.success").should(
      "have.length.greaterThan",
      0,
    );
  });

  it("checks page title", () => {
    cy.title().should("include", "Cypress.io: Kitchen Sink");
  });

  it("checks both implicit and explicit headings exist", () => {
    cy.contains("Implicit Assertions").should("exist");
    cy.contains("Explicit Assertions").should("exist");
  });

  it("checks h1 is not empty", () => {
    cy.get("h1").should("not.be.empty");
  });

  it("verifies docs.cypress.io link is present and clickable", () => {
    cy.visit("https://example.cypress.io/commands/assertions");

    cy.contains("a", "docs.cypress.io")
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "cypress.io");
  });
});
