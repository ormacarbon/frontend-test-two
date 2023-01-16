describe("DetailsNavigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    const userData = {
      login: "testinguser",
      password: "12345",
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    cy.get("button:contains('Login')").click();
    cy.get("button:contains('Return')").click();
    cy.get("button:contains('Login')").click();
    cy.get('input[placeholder="Login"]').type("testinguser");
    cy.get('input[placeholder="Password"]').type("12345");
    cy.get("button:contains('Enter')").click();
  });

  it("should be able to navigate from characters to episodes without using the menu navigation", () => {
    cy.get("[data-testid=table-characters-more-info-1]")
      .should("exist")
      .should("have.text", "More info")
      .click();
    cy.wait(2000)
    cy.contains("S01E01").click();
    cy.wait(2000)
    cy.get("[data-testid=character-picture-1]").should("be.visible").click();
  });
});
