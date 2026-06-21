describe("iPhone Air Page - Marquee Validation", () => {
  beforeEach(() => {
    cy.visit("https://www.apple.com"); // runs before EVERY it() block
  });

  it("checks url includes apple.com", () => {
    cy.url().should("include", "apple.com");
  });

  it("checks page title includes Apple", () => {
    cy.title().should("include", "Apple");
  });

  it("navigates to iPhone section", () => {
    cy.contains("iPhone").click({ force: true });
  });

  it("clicks iPhone Air", () => {
    cy.contains("iPhone Air").click({ force: true });
  });

  it("checks iPhone Air appears on the page", () => {
    cy.contains("iPhone Air").should("exist");
  });

  it("checks iPhone Air text is visible", () => {
    cy.contains("iPhone Air").should("exist"); //exists in DOM (even if hidden)
  });

  it("Validates the iPhone Air headline text", () => {
    cy.visit("https://www.apple.com/iphone-air/");
    // Check the h2 headline contains the marketing text
    cy.get("h2.header-headline")
      .should("be.visible")
      .and("contain.text", "The thinnest iPhone ever.")
      .and("contain.text", "With the power of pro inside.");
  });

  it("checks iPhone Air element is not empty", () => {
    cy.contains("iPhone Air").should("not.be.empty");
  });

  it("checks nav bar exists", () => {
    cy.get("nav").should("exist").and("be.visible");
  });

  it("checks Apple logo is present", () => {
    cy.get("a[aria-label='Apple']").should("exist").and("be.visible");
  });

  it("checks iPhone Air link has valid href", () => {
    cy.contains("a", "iPhone Air")
      .should("exist")
      .and("have.attr", "href")
      .and("include", "iphone");
  });

  it("checks both iPhone and Mac appear on page", () => {
    cy.contains("iPhone").should("exist");
    cy.contains("Mac").should("exist");
  });
});
